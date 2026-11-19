# Issue tracker: GitHub

Los issues y las specs de este repo viven como issues de GitHub en `citrino-bo/web`. Toda operación pasa por el CLI `gh`.

## Convenciones

- **Crear un issue**: `gh issue create --title "..." --body "..."`. Para cuerpos de varias líneas usá un heredoc, nunca un `--body` con `\n` escapado.
- **Leer un issue**: `gh issue view <número> --json number,title,body,labels,comments`.
- **Listar issues**: `gh issue list --state open --json number,title,body,labels,comments --jq '[.[] | {number, title, body, labels: [.labels[].name], comments: [.comments[].body]}]'` con los filtros `--label` y `--state` que correspondan.
- **Convertir un issue en sub-issue**: `gh issue create --parent <padre> ...`, o `gh issue edit <padre> --add-sub-issue <hijo>` (`gh` 2.94+). Con `gh` más viejo: `gh api --method POST repos/<owner>/<repo>/issues/<padre>/sub_issues -F sub_issue_id=<id-de-base-de-datos>`. Sin sub-issues, poné `Part of #<padre>` al principio del cuerpo del hijo.
- **Bloqueos**: usá las dependencias nativas de GitHub, la representación canónica y visible en la UI. Agregás la arista con `gh issue create --blocked-by <n>,<n> ...` o `gh issue edit <hijo> --add-blocked-by <bloqueador>` (`gh` 2.94+). Con `gh` más viejo: `gh api --method POST repos/<owner>/<repo>/issues/<hijo>/dependencies/blocked_by -F issue_id=<id-de-base-de-datos-del-bloqueador>`, donde el id es `gh api repos/<owner>/<repo>/issues/<n> --jq .id`, no el `#número` ni el `node_id`. Donde las dependencias no existen, poné `Blocked by: #<n>, #<n>` al principio del cuerpo del hijo. Un ticket está desbloqueado cuando todos sus bloqueadores están cerrados.
- **Contar bloqueadores abiertos**: `gh api repos/<owner>/<repo>/issues/<n> --jq .issue_dependencies_summary.blocked_by` devuelve sólo los abiertos; 0 significa que el ticket arranca. `gh issue view <n> --json blockedBy` también lista los cerrados, así que filtralo: `--jq '[.blockedBy.nodes[] | select(.state == "OPEN")] | length'`.
- **Comentar**: `gh issue comment <número> --body "..."`.
- **Etiquetar**: `gh issue edit <número> --add-label "..."` y `--remove-label "..."`.
- **Cerrar**: posteá la explicación con `gh issue comment <número> --body "..."` y después `gh issue close <número>`. En un issue ya cerrado, `gh issue close --comment` descarta el comentario y aun así sale con 0.

`gh` infiere el repo desde `git remote -v` cuando corre dentro del clon.

Abrí issues sólo en el repo propio. Nunca en `mattpocock/skills`, el repo de origen de estas skills, salvo que el usuario sea dueño. En un fork, `gh` puede apuntar al padre por defecto, así que antes del primer `gh issue create` de la sesión verificá el destino con `gh repo view --json nameWithOwner` y confirmalo con el usuario si no es el suyo.

## Pull requests como superficie de triage

**PRs como superficie de pedidos: no.** _(Poné `yes` si este repo trata los PRs externos como pedidos de funcionalidad; `/triage` lee este flag.)_

Cuando vale `yes`, los PRs pasan por las mismas etiquetas y estados que los issues, con sus equivalentes `gh pr`:

- **Leer un PR**: `gh pr view <número>`, después `gh pr view <número> --comments` (fuera de una TTY, `--comments` imprime sólo los comentarios, no el cuerpo), y `gh pr diff <número>` para el diff.
- **Listar PRs externos para triage**: `gh api --paginate 'repos/{owner}/{repo}/pulls?state=open' --jq '.[] | select(.author_association | IN("OWNER","MEMBER","COLLABORATOR") | not) | {number, title, author: .user.login, author_association, labels: [.labels[].name]}'`.
- **Comentar, etiquetar, cerrar**: `gh pr comment`, `gh pr edit --add-label`/`--remove-label`, `gh pr close`.

GitHub comparte un solo espacio de números entre issues y PRs, así que un `#42` suelto puede ser cualquiera de los dos: resolvelo con `gh pr view 42` y caé a `gh issue view 42`.

## Cuando una skill dice "publicá en el issue tracker"

Creá un issue de GitHub.

## Cuando una skill dice "traé el ticket relevante"

Leelo como en **Leer un issue**.

## Operaciones de wayfinding

Las usa `/wayfinder`. El **mapa** es un issue con **issues hijos** como tickets.

- **Mapa**: un issue etiquetado `wayfinder:map` que sostiene el cuerpo de Notas / Decisiones hasta ahora / Niebla. `gh issue create --label wayfinder:map`.
- **Ticket hijo**: un issue enlazado al mapa como sub-issue de GitHub (ver **Convertir un issue en sub-issue**). Donde los sub-issues no están habilitados, sumá el hijo a una task list del cuerpo del mapa y poné `Part of #<mapa>` al principio del cuerpo del hijo. Etiquetas: `wayfinder:<tipo>` (`research`/`prototype`/`grilling`/`task`). Una vez reclamado, el ticket queda asignado a quien lo conduce.
- **Bloqueos**: ver **Bloqueos** en Convenciones.
- **Consulta de frontera**: listá los hijos abiertos del mapa (`gh issue list --state open`, acotado a los sub-issues o a la task list del mapa), descartá los que tengan un bloqueador abierto (ver **Contar bloqueadores abiertos**, o un issue abierto en la línea `Blocked by`) o un asignado; gana el primero en el orden del mapa.
- **Reclamar**: `gh issue edit <n> --add-assignee @me`, la primera escritura de la sesión.
- **Resolver**: `gh issue comment <n> --body "<respuesta>"`, después `gh issue close <n>`, y al final agregá un puntero de contexto (resumen y link) a las Decisiones hasta ahora del mapa.
