Code Retreat Kickstart
======================

This project aims to give participants to local Global Day of Code Retreat sessions a way to get started in many languages.

To achieve this, there are many stub of several languages in order to get up and running for Test-Driven development

Contribute a language/framework
-------------------------------

In order to contribute your favourite language or framework and it's corresponding testing framework(s), simply fork this project, and add code for a single, simple class and/or method and a test, then send a pull request.

Put a `README.md` in each of the project files giving details about how to get started with the language/framework, in case they haven't got the tools installed (eg. for a .NET developer to try out TDD in Java for the first time). As much help as you can give here, and even installation helper scripts (eg. a Gemfile for Ruby or packages.json for npm) will get people up and running quickly and easily prior to the day, rather than spending time at the start of each iteration getting tools installed.

### Naming conventions

To have a common naming convention within this repository there is a loose folder structure and class & method naming for the stub projects & specs.

#### Folder structure

    <language>/<test framework>

For frameworks within a language (eg. Ruby on Rails):

    <language>/<framework>[/<test framework>]

#### Class/Method/Test names

* Class: `GameOfLife` or similar according to the language [naming conventions](http://en.wikipedia.org/wiki/Naming_convention_\(programming\))
* Method: `Go`
* Test name: 'it should return true for a basic test' should be simple enough to get started. Since there are different ways to form test names/specs depending on the flavour of testing framework, use your discretion, but KISS.

#### .gitignore for each language

If you want to add more `.gitignore` rules, add language-specific rules into the corresponding language directory's `.gitignore` file (or create a new one). If it's for an operating system, or generic text editor (eg. Vim or Emacs), add rules to the root `.gitignore` file.