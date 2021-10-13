/*import { SharedMatrix } from "fluid-framework";
import { TinyliciousClient } from "@fluidframework/tinylicious-client";

const containerSchema = {
    initialObjects: { tileLayer: SharedMatrix }
};

const createNewSharedTileLayer = async (client) => {
	const { container } = await client.createContainer(containerSchema);
	container.initialObjects.tileLayer.insertCols(0, 100);
	container.initialObjects.tileLayer.insertRows(0, 24);
	const id = await container.attach();
	return id;
};

const loadExistingSharedTileLayer = async (client, id) => {
	const { container } = await client.getContainer(id, containerSchema);
	// todo: populate TMXLayer
};

const tinyliciousClient = new TinyliciousClient();
async function start() {
    if (location.hash) {
        await loadExistingSharedTileLayer(tinyliciousClient, location.hash.substring(1))
    } else {
        const id = await createNewSharedTileLayer(tinyliciousClient);
        location.hash = id;
    }
}
start().catch((error) => console.error(error));
*/

game.PlayScreen = me.Stage.extend({
	/**
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		// load a level
		me.level.load("level02");
		
		// reset the score
		game.data.score = 0;

		// Add our HUD to the game world, add it last so that this is on top of the rest.
		// Can also be forced by specifying a "Infinity" z value to the addChild function.
		this.HUD = new game.HUD.Container();
		me.game.world.addChild(this.HUD);
		
		this.touchCanvas = new touchCanvas();
		me.game.world.addChild(this.touchCanvas);
		
		//me.game.world.tinyliciousClient = tinyliciousClient;
	},

	/**
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// remove the HUD from the game world
		me.game.world.removeChild(this.HUD);
		me.game.world.removeChild(this.touchCanvas);
	}
});
