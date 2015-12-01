# flow-api
Flow composition manipulation.

## Ideas

 - make the data store plugable (now it's the the git repo on the fs)
 - using the JSON-LD format would maybe open up some amazing possibilities (SEO)

## Methods

#### Getters

 - create new instance with module default config (package.composition)
 - create custom module instance (config.module = {main: "", browser: ""})
 - ?(extend existing instance with module default config)?
 - rename instance (enny?)
 - set/rm entrypoint (package.entrypoints)
 - set/rm config (config.config)
 - set/rm load instance (config.load)
 - set/rm instance role (config.roles)
 - set/rm markup (config.markups)
 - set/rm style (config.stules)
 - set/rm listener (flow[listener])
 - set/rm end event
 - set/rm error event
 - set/rm data handler (":", ".")
 - set/rm stream handler (">", "|")
 - set/rm flow handler (">", "|")
 - move handler (flow.d array position)

### Getters

 - get instance
 - get instances (object stream, graph format? JSON-LD visualizer????)
 - get module default config
