workspace(name = "bazel_playground")

# Load the rules for external repositories.
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Setup rules_nodejs for TypeScript.
http_archive(
    name = "rules_nodejs",
    sha256 = "f36e4a4747210331767033dc30728ae3df0856e88ecfdc48a0077ba874db16c3",
    strip_prefix = "rules_nodejs-6.0.3",
    url = "https://github.com/bazelbuild/rules_nodejs/releases/download/v6.0.3/rules_nodejs-v6.0.3.tar.gz",
)


# Setup rules_python for Python.
http_archive(
    name = "rules_python",
    sha256 = "d71d2c67e0bce986e1c5a7731b4693226867c45bfe0b7c5e0067228a536fc580",
    strip_prefix = "rules_python-0.29.0",
    url = "https://github.com/bazelbuild/rules_python/releases/download/0.29.0/rules_python-0.29.0.tar.gz",
)


# Initialize the Python rules.
load("@rules_python//python:repositories.bzl", "py_repositories")

py_repositories()

# Setup pip dependencies for Python.

load("@rules_python//python/extensions:pip.bzl", "pip_install")

pip_install(
    name = "py_deps",
 
    requirements = "//packages/metadata:requirements.txt",
)

