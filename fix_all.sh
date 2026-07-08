for file in $(find src -name "*.tsx"); do
    sed -i 's|const logoUrl = "/unnamed.png";|const logoUrl = "/logo.png";|g' $file
    sed -i 's|const panGreaseImg = "/unnamed (4).jpg";|const panGreaseImg = "/pan-grease.jpg";|g' $file
    sed -i 's|const bakersFatImg = "/unnamed (3).jpg";|const bakersFatImg = "/bakers-fat.jpg";|g' $file
    sed -i 's|const doughImproverImg = "/unnamed (5).jpg";|const doughImproverImg = "/dough-improver.jpg";|g' $file
    sed -i 's|const breadImproverImg = "/unnamed (5).jpg";|const breadImproverImg = "/dough-improver.jpg";|g' $file
    sed -i 's|const cakeGelImg = "/unnamed (2).jpg";|const cakeGelImg = "/cake-gel.jpg";|g' $file
done
