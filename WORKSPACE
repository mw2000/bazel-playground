workspace(name = "bazel_playground")

# Load the rules for external repositories.
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

### NODEJS

# Setup rules_nodejs for TypeScript.
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "c29944ba9b0b430aadcaf3bf2570fece6fc5ebfb76df145c6cdad40d65c20811",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/5.7.0/rules_nodejs-5.7.0.tar.gz"],
)

load("@build_bazel_rules_nodejs//:repositories.bzl",\
 "build_bazel_rules_nodejs_dependencies")
build_bazel_rules_nodejs_dependencies()



load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories")
node_repositories()


load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")
npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

### PYTHON
http_archive(
    name = "rules_python",
    sha256 = "b593d13bb43c94ce94b483c2858e53a9b811f6f10e1e0eedc61073bd90e58d9c",
    strip_prefix = "rules_python-0.12.0",
    url = "https://github.com/bazelbuild/rules_python/archive/refs/tags/0.12.0.tar.gz",
)

load("@rules_python//python:repositories.bzl", "py_repositories")
py_repositories()


load("@rules_python//python:pip.bzl", "pip_install")
pip_install(
    name = "pip",
    requirements = "//config:requirements.txt",
)

