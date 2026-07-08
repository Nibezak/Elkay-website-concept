for file in $(find src -name "*.tsx"); do
    sed -i "s|'/unnamed.png'|'/logo.png'|g" $file
    sed -i "s|'/unnamed (4).jpg'|'/pan-grease.jpg'|g" $file
    sed -i "s|'/unnamed (3).jpg'|'/bakers-fat.jpg'|g" $file
    sed -i "s|'/unnamed (5).jpg'|'/dough-improver.jpg'|g" $file
    sed -i "s|'/unnamed (2).jpg'|'/cake-gel.jpg'|g" $file
    sed -i "s|\"/unnamed (1).jpg\"|\"/hero1.jpg\"|g" $file
    sed -i "s|'/unnamed (1).jpg'|'/hero1.jpg'|g" $file
done
