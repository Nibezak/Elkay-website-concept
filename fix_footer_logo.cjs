const fs = require('fs');

let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

content = content.replace(
    /<div className="flex items-center h-16 w-16 bg-white p-2 rounded-full">\s*<img src="\/elkaylogo\.png" alt="Elkay Logo" className="h-full w-auto max-h-\[80px\] object-contain filter invert" \/>\s*<\/div>/,
    `<div className="flex items-center h-[50px]">\n              <img src="/elkaylogo.png" alt="Elkay Logo" className="h-full w-auto object-contain bg-white rounded-[12px] p-2" />\n            </div>`
);

fs.writeFileSync('src/components/Footer.tsx', content);
