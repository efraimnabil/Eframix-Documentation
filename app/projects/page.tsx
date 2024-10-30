import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

interface Project {
  id: number
  name: string
  description: string
  author: string
  url: string
  tags: string[]
}

async function fetchProjects() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, {
      next: { revalidate: 60 },
    });

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

export default async function ProjectsShowcase() {
  const projects: Project[] = await fetchProjects();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Projects Built with Eframix</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={`${project.id}-${index}`} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.url}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">No projects found. Try a different search term.</p>
      )}
    </div>
  )
}
