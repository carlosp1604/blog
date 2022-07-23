export class Author {
  private readonly id: string
  private readonly name: string
  private readonly description: string
  private readonly aboutMe: string
  private readonly bannerHexColor: string
  private readonly imageUrl: string

  constructor (
    id: string,
    name: string,
    description: string,
    aboutMe: string,
    bannerHexColor: string,
    imageUrl: string
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.aboutMe = aboutMe
    this.bannerHexColor = bannerHexColor
    this.imageUrl = imageUrl
  }
}
