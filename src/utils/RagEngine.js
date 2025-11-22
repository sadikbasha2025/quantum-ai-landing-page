import * as pdfjsLib from 'pdfjs-dist';

// Set worker source to CDN to avoid build issues with Vite
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const extractTextFromPDF = async (url) => {
    try {
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;
        let fullText = [];

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(' ');
            fullText.push({ page: i, text: pageText });
        }

        return fullText;
    } catch (error) {
        console.error("Error extracting PDF text:", error);
        return [];
    }
};

export const searchPDF = (pdfData, query) => {
    if (!query || !pdfData) return [];

    const lowerQuery = query.toLowerCase();
    // Split query into keywords (ignoring common words)
    const keywords = lowerQuery.split(' ').filter(w => w.length > 3);

    const results = pdfData.filter(page => {
        const lowerText = page.text.toLowerCase();
        // Check if any keyword matches
        return keywords.some(keyword => lowerText.includes(keyword));
    });

    // Return top 3 most relevant pages (simple implementation)
    return results.slice(0, 3);
};
