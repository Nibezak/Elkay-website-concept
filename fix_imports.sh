for file in $(find src -name "*.tsx"); do
    sed -i 's|const logoUrl = "/logo.png";|import logoUrl from "../assets/logo.png";|g' $file
    sed -i 's|const panGreaseImg = "/pan-grease.jpg";|import panGreaseImg from "../assets/pan-grease.jpg";|g' $file
    sed -i 's|const bakersFatImg = "/bakers-fat.jpg";|import bakersFatImg from "../assets/bakers-fat.jpg";|g' $file
    sed -i 's|const doughImproverImg = "/dough-improver.jpg";|import doughImproverImg from "../assets/dough-improver.jpg";|g' $file
    sed -i 's|const breadImproverImg = "/dough-improver.jpg";|import breadImproverImg from "../assets/dough-improver.jpg";|g' $file
    sed -i 's|const cakeGelImg = "/cake-gel.jpg";|import cakeGelImg from "../assets/cake-gel.jpg";|g' $file
    sed -i 's|const certImg = "/hero1.jpg";|import certImg from "../assets/hero1.jpg";|g' $file
done
