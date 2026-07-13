const fs = require('fs');
const path = require('path');

function replaceImages(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove imports
    content = content.replace(/import [a-zA-Z0-9_]+ from "\.\.\/assets\/[^"]+\.jpg";\n?/g, '');
    content = content.replace(/import [a-zA-Z0-9_]+ from '\.\.\/assets\/[^']+\.jpg';\n?/g, '');

    // Replace variables with strings
    content = content.replace(/\{?unnamedImg\}?/g, '"https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"');
    content = content.replace(/\{?hero1Img\}?/g, '"https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80"');
    content = content.replace(/\{?bakersFatImg\}?/g, '"https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&q=80"');
    content = content.replace(/\{?panGreaseImg\}?/g, '"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&q=80"');
    content = content.replace(/\{?doughImproverImg\}?/g, '"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"');
    content = content.replace(/\{?breadImproverImg\}?/g, '"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"');

    // For avatar specific fixes in Testimonials
    if (filePath.includes('Testimonials')) {
        content = content.replace(/"https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d\?w=1600&q=80"/, '"https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop"'); // first avatar/image
        content = content.replace(/"https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d\?w=1600&q=80"/, '"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"'); // second avatar/image
    }

    fs.writeFileSync(filePath, content);
}

const files = [
    'src/components/About.tsx',
    'src/components/WhyUs.tsx',
    'src/components/Footer.tsx',
    'src/components/Testimonials.tsx',
    'src/components/Hero.tsx',
    'src/components/Features.tsx',
    'src/pages/BreadImprover.tsx',
    'src/pages/BakersFat.tsx',
    'src/pages/PanGrease.tsx',
    'src/pages/Products.tsx'
];

files.forEach(replaceImages);
console.log("Images replaced");
