{ pkgs }: {
  deps = with pkgs; [
        nodePackages.vscode-langservers-extracted
        nodePackages.typescript-language-server  
  ];
}