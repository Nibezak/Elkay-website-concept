const fs = require('fs');
let content = fs.readFileSync('src/components/Certifications.tsx', 'utf8');
content = content.replace(/import certImg from "\.\.\/assets\/hero1\.jpg";\n/, '');
content = content.replace(/src=\{certImg\}/, 'src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=1600&q=80"');
fs.writeFileSync('src/components/Certifications.tsx', content);
