---
title: Flash Component
---

# Flash Component

Es gibt eine Flash Component um Flash Messages anzuzeigen. Aktuell basiert die Implementierung auf dem Beispiel
von css zero, wo eine Bar oben angzeigt wird und nach einer Zeit verschwindet. Das css dazu liegt in `flash.css`.

![Flash Component Example](/images/flash-component-example.png)

Im Controller wird es so eingebunden. Wichtig ist, dass flash.now verwendet wird.

```ruby
flash.now.alert = "Beim Speichern ist ein Fehler aufgetreten"
streams = [
  turbo_stream.update("form", Components::PersonFormComponent.new(
    url: examples_people_path,
    form: @form,
    method: :post
  )),
  turbo_stream.update("flash", Components::FlashComponent.new)
]
render turbo_stream: streams
```
