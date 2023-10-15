echo "Enter the package name you want to install: "


read package_name

nix-shell -p $package_name