type ImageProps = {
  url: string
  imgix_url: string
}

type FotografiaItem = {
  name: string
  image: ImageProps
}

type FotografiaMetadata = {
  fotografia: FotografiaItem[]
}

export type FotografiaProps = {
  object: {
    title: string
    metadata: FotografiaMetadata
  }
}
