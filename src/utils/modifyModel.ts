import * as THREE from 'three'

export function getByPath (root: any, path: string) {
  const segments = path.split('/').filter(Boolean)
  let current = root
  for (const seg of segments) {
    current = current?.children?.find((c: any) => c.name === seg)
    if (!current) return null
  }
  return current
}
// Helper: clonar e ajustar opacidade de materiais (suporta multi-materiais)
export function setOpacity(mesh: any, opacity: number){
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

export function transverseModel (
  scene: any, 
  // target:any,
  // focusName: any, 
  focusSet: any,
  // opacityOthers:any,
  opacity:number = 0.05
){
  scene.traverse((child: any) => {
    if (!child.isMesh) return
    // const isTarget = target ? child === target || child.uuid === target.uuid : child.name === focusName

    centerMeshOrigin(child)

    if (focusSet.has(child.name)) {
      child.visible = true
      setOpacity(child, 1)

      // Aqui entra o brilho
      if (child.material) {
        // clone para não afetar materiais compartilhados
        const mat = child.material.clone()
        // mat.emissive = new THREE.Color('#b967ff') // cor do brilho
        // mat.emissiveIntensity = 3               // intensidade suave
        child.material = mat
      }

    }
    else {
      child.visible = true
      setOpacity(child, opacity)
    }
  })
}

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