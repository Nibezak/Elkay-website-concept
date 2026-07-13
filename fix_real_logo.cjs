const fs = require('fs');

function replaceWithRealLogo(filePath, isFooter) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (isFooter) {
        content = content.replace(/<div className="text-white w-full h-full flex items-center justify-center">[\s\S]*?<\/svg><\/div>/, `<img src="/elkaylogo.png" alt="Elkay Logo" className="h-full w-auto max-h-[80px] object-contain filter invert" />`);
    } else {
        content = content.replace(/<div className="text-\[#012E1B\] flex items-center p-1">[\s\S]*?<\/svg><\/div>/, `<img src="/elkaylogo.png" alt="Elkay Logo" className="h-[40px] w-auto object-contain p-1" />`);
    }
    fs.writeFileSync(filePath, content);
}

replaceWithRealLogo('src/components/Header.tsx', false);
replaceWithRealLogo('src/components/Footer.tsx', true);
