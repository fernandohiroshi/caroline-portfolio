type ImageProps = {
  url: string
  imgix_url: string
}

type PosterItem = {
  image: ImageProps
}

type PosterMetadata = {
  posters: PosterItem[]
}

export type PosterProps = {
  object: {
    title: string
    metadata: PosterMetadata
  }
}
