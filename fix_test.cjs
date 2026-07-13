const fs = require('fs');
let content = fs.readFileSync('src/components/Testimonials.tsx', 'utf8');

content = content.replace(
  /image: "https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d\?w=1600&q=80"/,
  'image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80"'
);

content = content.replace(
  /avatar: "https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745aae4d\?w=1600&q=80"/,
  'avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"'
);

fs.writeFileSync('src/components/Testimonials.tsx', content);
