type ImageProps = {
  url: string
  imgix_url: string
}

type SocialBoxImage = {
  image_1: ImageProps
  image_2: ImageProps
  image_3: ImageProps
}

type SocialMetadata = {
  box: SocialBoxImage[]
}

export type SocialProps = {
  object: {
    title: string
    metadata: SocialMetadata
  }
}
