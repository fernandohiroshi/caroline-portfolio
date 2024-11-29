type ImageProps = {
  url: string
  imgix_url: string
}

type DesignItem = {
  images: ImageProps
}

type DesignMetadata = {
  desenhos: DesignItem[]
}

export type DesignProps = {
  object: {
    title: string
    metadata: DesignMetadata
  }
}
