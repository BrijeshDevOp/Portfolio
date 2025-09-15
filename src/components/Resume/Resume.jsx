import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Auto-download the resume when component mounts
        const downloadResume = () => {
            const link = document.createElement('a');
            link.href = './assets/resume.pdf';
            link.download = 'Brijesh_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };

        // Small delay to ensure page loads first
        const timer = setTimeout(downloadResume, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <div className="resume-page">
            <iframe 
                src="./assets/resume.pdf" 
                title="Resume PDF"
                width="100%" 
                height="100%"
            >
                <p>Your browser does not support PDFs. 
                   <a href="./assets/resume.pdf" download="Brijesh_Resume.pdf">
                       Download the PDF
                   </a>
                </p>
            </iframe>
        </div>
    );
};

export default Resume;
