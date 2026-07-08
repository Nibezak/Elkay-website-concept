for file in $(grep -rl "../../assets" src/); do
    sed -i 's|import \(.*\) from "../../assets/\(.*\)";|const \1 = "/\2";|g' $file
    sed -i 's|import \(.*\) from "../../../assets/\(.*\)";|const \1 = "/\2";|g' $file
done
