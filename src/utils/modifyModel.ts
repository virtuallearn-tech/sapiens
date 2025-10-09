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
// Helper: clonar e ajustar opacidade de materiais (suporta multi-materiais)
export function setOpacity(mesh: any, opacity: number) {
  const apply = (mat: any) => {
    if (!mat) return mat
    const cloned = mat.isMaterial ? mat.clone() : mat
    cloned.transparent = opacity < 1
    cloned.opacity = opacity

    return cloned
  }
  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map(apply)
  } else {
    mesh.material = apply(mesh.material)
  }
}

export function transverseModel(
  scene: any,
  focusSet: Set<string>,
  opacity: number = 0.05
) {
  scene.traverse((child: any) => {
    if (!child.isMesh) return

    centerMeshOrigin(child)

    if (focusSet.has(child.name)) {
      child.visible = true
      setOpacity(child, 1)

      // Salva material original se ainda não foi salvo
      if (!child.userData.originalMaterial) {
        child.userData.originalMaterial = child.material
      }

      // Clona para aplicar destaque sem afetar outros meshes
      const mat = child.material.clone()

      // Se quiser usar emissive futuramente:
      // mat.emissive = new THREE.Color('#b967ff')
      // mat.emissiveIntensity = 3

      child.material = mat
    } else {
      child.visible = true
      setOpacity(child, opacity)
    }
  })
}

export function resetTransverseModel(scene: any) {
  scene.traverse((child: any) => {
    if (!child.isMesh) return

    child.visible = true
    setOpacity(child, 1)

    // Restaura material original, se existir
    if (child.userData.originalMaterial) {
      child.material = child.userData.originalMaterial
      delete child.userData.originalMaterial
    }
  })
}

// export function setOpacity(mesh: any, opacity: number) {
//   const apply = (mat: any) => {
//     if (!mat) return mat
//     mat.transparent = opacity < 1
//     mat.opacity = opacity
//     return mat
//   }

//   if (Array.isArray(mesh.material)) {
//     mesh.material.forEach(apply)
//   } else {
//     apply(mesh.material)
//   }
// }

// export function transverseModel(
//   scene: any,
//   focusSet: Set<string>,
//   opacity: number = 0.05
// ) {
//   scene.traverse((child: any) => {
//     if (!child.isMesh) return

//     centerMeshOrigin(child)

//     if (focusSet.has(child.name)) {
//       child.visible = true
//       setOpacity(child, 1)

//       // Se quiser destacar com emissive futuramente:
//       // if (child.material) {
//       //   child.material.emissive = new THREE.Color('#b967ff')
//       //   child.material.emissiveIntensity = 3
//       // }
//     } else {
//       child.visible = true
//       setOpacity(child, opacity)
//     }
//   })
// }

// export function resetTransverseModel(scene: any) {
//   scene.traverse((child: any) => {
//     if (!child.isMesh) return

//     child.visible = true
//     setOpacity(child, 1)

//     // Reset emissive se tiver sido usado
//     if (child.material) {
//       // child.material.emissive.set(0x000000)
//       // child.material.emissiveIntensity = 0
//       child.material.transparent = false
//     }
//   })
// }


export function centerMeshOrigin(mesh: THREE.Mesh) {
  if (!mesh.geometry) return

  // Calcula o centro atual da geometria
  const center = new THREE.Vector3()
  mesh.geometry.computeBoundingBox()
  mesh.geometry.boundingBox?.getCenter(center)

  // Move a geometria para que o centro fique na origem
  mesh.geometry.center()

  // Compensa a posição da mesh para não "saltar" na cena
  mesh.position.add(center)
}


