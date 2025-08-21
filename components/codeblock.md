---
title: Codeblock Component
---

# Codeblock Component

Ein Codeblock wird wie folgt dargestellt.

```ruby
render_example(
  header: "Primary Badge (Default)",
  code: <<~RUBY
    BadgeComponent(label: "5", state: :primary) do
      IconComponent(icon_name: "bell", size: 8)
    end
  RUBY
)
```
