type UXUIImageProps = {
  url: string
}

type UXUIBoxData = {
  titulo: string
  descricao: string
  img_1: UXUIImageProps
  img_2: UXUIImageProps
  img_3: UXUIImageProps
  img_4: UXUIImageProps
}

type UXUIMetadata = {
  box_1: UXUIBoxData
  box_2: UXUIBoxData
  box_3: UXUIBoxData
}

export type UXUIProps = {
  object: {
    title: string
    metadata: UXUIMetadata
  }
}
