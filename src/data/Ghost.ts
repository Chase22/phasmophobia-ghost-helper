import {Evidence} from "./Evidence";

export interface Ghost {
    name: string,
    evidence: Array<Evidence>
}

const ghosts: Array<Ghost> = [
    {name: "Banshee", evidence: ["FINGERPRINTS", "EMF_LEVEL_5", "FREEZING_TEMPERATURE"]},
    {name: "Demon", evidence: ["SPIRIT_BOX", "FREEZING_TEMPERATURE", "GHOST_WRITING"]},
    {name: "Jinn", evidence: ["GHOST_ORB", "SPIRIT_BOX", "EMF_LEVEL_5"]},
    {name: "Mare", evidence: ["GHOST_ORB", "SPIRIT_BOX", "FREEZING_TEMPERATURE"]},
    {name: "Oni", evidence: ["SPIRIT_BOX", "EMF_LEVEL_5", "GHOST_WRITING"]},
    {name: "Phantom", evidence: ["GHOST_ORB", "EMF_LEVEL_5", "FREEZING_TEMPERATURE"]},
    {name: "Poltergeist", evidence: ["GHOST_ORB", "SPIRIT_BOX", "FINGERPRINTS"]},
    {name: "Revenant", evidence: ["FINGERPRINTS", "EMF_LEVEL_5", "GHOST_WRITING"]},
    {name: "Shade", evidence: ["GHOST_ORB", "EMF_LEVEL_5", "GHOST_WRITING"]},
    {name: "Spirit", evidence: ["SPIRIT_BOX", "FINGERPRINTS", "GHOST_WRITING"]},
    {name: "Wraith", evidence: ["SPIRIT_BOX", "FINGERPRINTS", "FREEZING_TEMPERATURE"]},
    {name: "Yurei", evidence: ["GHOST_ORB", "FREEZING_TEMPERATURE", "GHOST_WRITING"]},
]

export default ghosts
