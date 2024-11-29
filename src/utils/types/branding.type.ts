type ImageProps = {
  url: string
}

type BrandingBox = {
  imagem_1: ImageProps
  imagem_2: ImageProps
  imagem_3: ImageProps
  imagem_4: ImageProps
  imagem_5: ImageProps
  imagem_6: ImageProps
}

type BrandingMetadata = {
  branding_box_1: BrandingBox
  branding_box_2: BrandingBox
  branding_box_3: BrandingBox
  branding_box_4: BrandingBox
}

export type BrandingProps = {
  object: {
    title: string
    metadata: BrandingMetadata
  }
}
