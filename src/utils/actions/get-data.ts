async function fetchData(url: string) {
  try {
    const res = await fetch(url, { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error(`Failed to fetch data from ${url}`)
    }

    return res.json()
  } catch (err) {
    console.error('Error fetching data:', err)
    throw new Error(`Failed to fetch data from ${url}`)
  }
}

export async function getDataHome() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/670604a03f50b63a36f56032?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title%2Cmetadata&limit=10&skip=0&sort=-order`
  return fetchData(url)
}

export async function getDataBranding() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/670eefaa031c6d71de80eb22?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`
  return fetchData(url)
}

export async function getDataSocialMedia() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/670f5768031c6d71de80eb7e?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title%2Cmetadata&limit=10&skip=0&sort=-order`
  return fetchData(url)
}

export async function getDataUxui() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/672232f52be765525ff94d59?read_key=${process.env.READ_KEY}&depth=1&props=title,metadata`
  return fetchData(url)
}

export async function getDataFoto() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/6732434c1b927471f4a678d2?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title%2Cmetadata&limit=10&skip=0&sort=-order`
  return fetchData(url)
}

export async function getDataPosters() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/67357f9dd24fb1bb49e9ee3f?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=title%2Cmetadata&limit=10&skip=0&sort=-order`
  return fetchData(url)
}

export async function getDataDesign() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/objects/673287b4a40c6c3df2599fc8?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=metadata&limit=10&skip=0&sort=-order`
  return fetchData(url)
}
