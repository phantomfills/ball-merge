import { Debris, Workspace } from "@rbxts/services";

export function createMergeParticles(
	position: Vector3,
	count: number = 5,
	size: number = 1,
	speed: number = 20,
	color: Color3 = Color3.fromRGB(255, 255, 255),
) {
	const particlePart = new Instance("Part");
	particlePart.Size = new Vector3(1, 1, 1);
	particlePart.Position = position;
	particlePart.Anchored = true;
	particlePart.CanCollide = false;
	particlePart.Transparency = 1;
	particlePart.Parent = Workspace;

	const particleAttachment = new Instance("Attachment");
	particleAttachment.Parent = particlePart;

	const particleEmitter = new Instance("ParticleEmitter");
	particleEmitter.Color = new ColorSequence(color);
	particleEmitter.Texture = "rbxassetid://13993227947";
	particleEmitter.Size = new NumberSequence(size);
	particleEmitter.SpreadAngle = new Vector2(40, 40);
	particleEmitter.RotSpeed = new NumberRange(40);
	particleEmitter.Speed = new NumberRange(speed);
	particleEmitter.Acceleration = new Vector3(0, -20, 0);
	particleEmitter.Lifetime = new NumberRange(0.25, 0.5);
	particleEmitter.Transparency = new NumberSequence([
		new NumberSequenceKeypoint(0, 0),
		new NumberSequenceKeypoint(1, 1),
	]);
	particleEmitter.Enabled = false;
	particleEmitter.Parent = particleAttachment;

	particleEmitter.Emit(count);

	Debris.AddItem(particlePart, 1);
}
