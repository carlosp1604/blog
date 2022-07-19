export class Course {
    private readonly id: string
    private readonly name: string
    private readonly slug: string
    private readonly description: string
    private readonly imageUrl: string
    private readonly publishedAt: Date
    private readonly lastUpdate: Date

    constructor(
        id: string,
        name: string,
        slug: string,
        description: string,
        imageUrl: string,
        publishedAt: Date,
        lastUpdate: Date
    ) {
        this.id = id
        this.name = name
        this.slug = slug
        this.description = description
        this.imageUrl = imageUrl
        this.publishedAt = publishedAt
        this.lastUpdate = lastUpdate
    }
}