# Contributing to Atvorn

Thank you for considering contributing to Atvorn! We appreciate your time and effort. This guide will help you get started with contributing to our project.

## 🤝 Code of Conduct

Before contributing, please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for community behavior.

## 🧭 How to Contribute

### 🐛 Reporting Bugs

1. Check if the bug has already been reported in [GitHub Issues](https://github.com/gauravst/atvorn/issues)
2. If not, create a new issue with:
   - A clear, descriptive title
   - Steps to reproduce
   - Expected vs. actual behavior
   - Screenshots if applicable
   - Your environment (OS, browser, etc.)

### 💡 Suggesting Enhancements

1. Check existing issues and feature requests
2. Open a new issue with:
   - A clear description of the enhancement
   - Use case and why it would be valuable
   - Any mockups or examples if applicable

### 🛠️ Making Code Contributions

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/your-username/atvorn.git
   ```
3. Create a **new branch** for your changes:

```bash
git checkout -b feature/your-feature-name
```

4.  Make your changes following our coding standards
5.  **Test** your changes thoroughly
6.  **Commit** your changes with a descriptive message:

    ```bash
    git commit -m "feat: add new dashboard component"
    ```

7.  **Push** to your fork:

    ```bash
    git push origin feature/your-feature-name
    ```

8.  Open a **Pull Request** to the main repository's `dev` branch

## 📝 Coding Standards

### Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for test related changes
- `chore:` for maintenance tasks

### Code Style

- Frontend: Follow React best practices and ESLint rules
- Backend: Follow Go formatting standards (`gofmt`)
- Use descriptive variable and function names
- Include comments for complex logic

## 🧪 Testing

- All new features should include tests
- Bug fixes should include regression tests
- Run existing tests before submitting:

```bash
# For frontend
bun test
```

```bash
# For backend
go test ./...
```

## 📖 Documentation

- Update documentation when adding new features
- Keep comments clear and up-to-date
- Add examples where helpful

## 🔍 Review Process

- Maintainers will review your PR
- You may need to make changes based on feedback
- Once approved, your PR will be merged

## ❓ Need Help?

- Join our [GitHub Discussions](https://github.com/gauravst/atvorn/discussions)
- Ask questions in the `#help` channel

## 🙏 Thank You!

Your contributions help make Atvorn better for everyone. We appreciate your time and effort!
