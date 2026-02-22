import * as THREE from 'three'

export function getByPath(root: any, path: string) {
  const segments = path.split('/').filter(Boolean)
  let current = root
  for (const seg of segments) {
    current = current?.children?.find((c: any) => c.name === seg)
    if (!current) return null
  }
  return current
}

export function centerMeshOrigin(mesh: THREE.Mesh) {
  if (!mesh.geometry) return

  const center = new THREE.Vector3()
  mesh.geometry.computeBoundingBox()
  mesh.geometry.boundingBox?.getCenter(center)

  mesh.geometry.center()
  mesh.position.add(center)
}

export function setOpacity(mesh: any, opacity: number) {
  const apply = (mat: any) => {
    if (!mat) return
    mat.transparent = opacity < 1
    mat.opacity = opacity
  }

  if (Array.isArray(mesh.material)) {
    mesh.material.forEach(apply)
  } else {
    apply(mesh.material)
  }
}

/**
 * Deixa visível e opaco apenas os objetos com nomes em focusSet.
 * O restante fica translúcido, mas ainda visível (ou pode ser escondido se quiser).
 */
export function transverseModel(scene: any, focusSet: Set<string>, opacity: number = 0.1) {
  scene.traverse((child: any) => {
    if (!child.isMesh) return

    const isFocused = focusSet.has(child.name)

    // Salva estado original apenas uma vez
    if (!child.userData.originalState) {
      child.userData.originalState = {
        material: child.material,
        opacity: Array.isArray(child.material)
          ? child.material.map((m: any) => m.opacity)
          : child.material?.opacity,
      }
    }

    // Clona material para evitar efeitos colaterais
    if (!child.userData.cloned) {
      child.material = child.material.clone()
      child.userData.cloned = true
    }

    // Aplica destaque
    if (isFocused) {
      setOpacity(child, 1)
      child.visible = true
    } else {
      setOpacity(child, opacity)
      child.visible = true // ou false se quiser esconder totalmente
    }
  })
}

/**
 * Restaura completamente o estado original da model.
 */
export function resetTransverseModel(scene: any) {
  scene.traverse((child: any) => {
    if (!child.isMesh) return

    const original = child.userData.originalState

    if (original) {
      // Restaura material original
      child.material = original.material

      // Restaura opacidade original
      if (Array.isArray(child.material)) {
        child.material.forEach((m: any, i: number) => {
          if (original.opacity?.[i] !== undefined) m.opacity = original.opacity[i]
        })
      } else if (original.opacity !== undefined) {
        child.material.opacity = original.opacity
      }

      // Limpa flags
      delete child.userData.originalState
      delete child.userData.cloned
    } else {
      // Caso não tenha backup, restaura um estado padrão
      setOpacity(child, 1)
    }

    child.visible = true
  })
}

export function hasFocusMatch(scene: any, focusSet: Set<string>): boolean {
  let found = false

  scene.traverse((child: any) => {
    if (found) return
    if (!child.isMesh) return

    if (focusSet.has(child.name)) {
      found = true
    }
  })

  return found
}