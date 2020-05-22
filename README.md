# Deno Simple Api

It's a basic CRUP api using Deno(1.0) and Mongo. 

## Getting Started

As you may already know, Deno does not have a configuration file with the dependencies. When importing a module, you will find its reference.

** Yes.. This CRUD is about :t-rex:

### Prerequisites

The instructions is here:

https://deno.land/

## Endpoint Router
```
    get    /dino           
    post   /dino
    get    /dino/:id
    patch  /dino/:id
    delete /dino/:id
```

## Format Data

The only attribute (still) of our entity is name. Use for post and patch.

```
{
    "name": "T-rex"
}
```

## Running

After install Deno, use the cli to execute the project:

```
deno run --allow-env --allow-read --allow-net --allow-write --allow-plugin --unstable index.ts
```

## Built With

* [Deno](https://deno.land) - The web framework used

## Authors

* **Lucas Souza** (https://github.com/lucasalvessouza)