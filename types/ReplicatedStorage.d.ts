interface ReplicatedStorage extends Instance {
	TS: Folder & {
		module: ModuleScript;
	};
	assets: Folder & {
		balls: Folder & {
			ball_4: Part;
			ball_2: Part;
			ball_3: Part;
			ball_5: Part;
			ball_1: Part;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				services: ModuleScript;
				["compiler-types"]: Folder & {
					types: Folder;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
			};
		};
	};
}
