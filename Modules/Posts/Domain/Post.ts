export class Post {
    private readonly id: string
    private readonly slug: string
    private readonly parentId: string
    private readonly title: string
    private readonly imageUrl: string
    private readonly readTime: number
    private readonly publishedAt: Date
    private readonly lastUpdate: Date
    private readonly courseId: string | null
    private readonly authorId: string

    constructor(
        id: string,
        slug: string,
        parentId: string,
        title: string,
        imageUrl: string,
        readTime: number,
        publishedAt: Date,
        lastUpdate: Date,
        courseId: string | null,
        authorId: string
    ) {
        this.id = id
        this.slug = slug
        this.parentId = parentId
        this.title = title
        this.imageUrl = imageUrl
        this.readTime = readTime
        this.publishedAt = publishedAt
        this.lastUpdate = lastUpdate
        this.courseId = courseId
        this.authorId = authorId
    }

}