for file in $(find src -name "*.tsx"); do
    sed -i "s|import \(.*\) from '../../assets/\(.*\)';|const \1 = '/\2';|g" $file
    sed -i 's|import \(.*\) from "../../assets/\(.*\)";|const \1 = "/\2";|g' $file
    sed -i "s|import \(.*\) from '../assets/\(.*\)';|const \1 = '/\2';|g" $file
    sed -i 's|import \(.*\) from "../assets/\(.*\)";|const \1 = "/\2";|g' $file
done
