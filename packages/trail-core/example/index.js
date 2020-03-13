const {TrailsManager} = require('@nearform/trail-core')

const main = async function() {
  const manager = new TrailsManager()

  const id = await manager.insert({when: new Date(), who: 'user:1', what: 'open', subject: 'page:1'})
  const trail = await manager.get(id)
  console.log(trail.who)

  await manager.close()
}

main().catch(console.error)
