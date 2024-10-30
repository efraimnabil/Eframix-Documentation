import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

interface Contributor {
    id: number
    name: string
    avatar: string
    githubUrl: string
    contributions: string[]
}

async function fetchContributors() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contributors`, {
            next: { revalidate: 60 },
        })
        if (!response.ok) {
            console.error('Failed to fetch projects:', response.statusText);
            return []
        }

        return await response.json();
    } catch (error) {
        console.error('An error occurred while fetching projects:', error);
        return [];
    }
}

export default async function Contributors() {
    const contributors: Contributor[] = await fetchContributors()

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Eframix Contributors</h1>
            <p className="text-lg mb-8">
                We&apos;re grateful to all the contributors who have helped make Eframix better.
                Thank you for your time, effort, and expertise!
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {contributors.map(contributor => (
                    <Card key={contributor.id}>
                        <CardHeader>
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                    <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>{contributor.name}</CardTitle>
                                    <CardDescription>
                                        <Link href={contributor.githubUrl} className="text-blue-500 hover:underline">
                                            GitHub Profile
                                        </Link>
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {contributor.contributions.map((contribution, index) => (
                                    <Badge key={index} variant="secondary">{contribution}</Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
