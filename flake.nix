{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pythonPkgs = pkgs.python310Packages;
        system = "x86_64-linux";
        pkgs = nixpkgs.legacyPackages.${system};
        fhs = pkgs.buildFHSUserEnv {
          name = "mainline_shell";
          targetPkgs = pkgs: (with pkgs; [
            python310
            pythonPkgs.pip
            ta-lib
            stdenv.cc.cc.lib
            libz
            graphviz
            glibc
            gnumake clang boost pkg-config cmake
            nodejs
          ]);
          profile = ''
            export CFLAGS="-I/usr/include $CFLAGS"
            export LDFLAGS="-L/usr/lib $LDFLAGS"
            export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/lib"
          '';
          runScript = "fish";
        };
      in
      {
        devShells.default = fhs.env;
      }
    );
}
