import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectModel, projects } from "../components/Projects";
import '../css/ProjectDetailStyle.css';


function ProjectDetail() {

    const { projectId } = useParams();
    const [images, setImages] = useState<{ id: number, url: string }[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    useEffect(() => {

        const project: ProjectModel | undefined = projects.find(
            (project) => project.id.toString() === projectId
        );
        if (project) {
            const images = [...Array(project.numberScreenshot).keys()].map((_, index) => ({
                id: index + 1,
                url: `${project.screenshotUrl}${index + 1}.png`,
            }));
            setImages(images);
        }
    }, [projectId])

    return (
        <div>
            <div className="image-grid">
                {images.map((image) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={`Screenshot ${image.id}`}
                        onClick={() => setSelectedImage(image.url)}
                    />
                ))}
            </div>

            {selectedImage && (
                <div className='modal active' onClick={() => setSelectedImage(null)}>
                    <button className='modal-close' onClick={() => setSelectedImage(null)}>
                        &times;
                    </button>
                    <img src={selectedImage} alt="SelectedImage" />
                </div>
            )}
        </div>

    )
}

export default ProjectDetail