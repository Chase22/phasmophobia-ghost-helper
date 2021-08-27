import {Evidence} from "./Evidence";

export interface Ghost {
    name: string,
    evidence: Array<Evidence>
}

const ghosts: Array<Ghost> = [
    {name: "Banshee", evidence: ["FINGERPRINTS", "GHOST_ORB", "D.O.T.S_PROJECTOR"]},
    {name: "Demon", evidence: ["FINGERPRINTS", "FREEZING_TEMPERATURE", "GHOST_WRITING"]},
    {name: "Goryo", evidence: ["EMF_LEVEL_5", "FINGERPRINTS", "D.O.T.S_PROJECTOR"]},
    {name: "Hantu", evidence: ["FREEZING_TEMPERATURE", "GHOST_ORB", "FINGERPRINTS"]},
    {name: "Jinn", evidence: ["FREEZING_TEMPERATURE", "FINGERPRINTS", "EMF_LEVEL_5"]},
    {name: "Mare", evidence: ["GHOST_ORB", "SPIRIT_BOX", "GHOST_WRITING"]},
    {name: "Myling", evidence: ["EMF_LEVEL_5", "GHOST_WRITING", "FINGERPRINTS"]},
    {name: "Oni", evidence: ["FREEZING_TEMPERATURE", "EMF_LEVEL_5", "D.O.T.S_PROJECTOR"]},
    {name: "Phantom", evidence: ["SPIRIT_BOX", "FINGERPRINTS", "D.O.T.S_PROJECTOR"]},
    {name: "Poltergeist", evidence: ["SPIRIT_BOX", "GHOST_WRITING", "FINGERPRINTS"]},
    {name: "Revenant", evidence: ["FREEZING_TEMPERATURE", "GHOST_ORB", "GHOST_WRITING"]},
    {name: "Shade", evidence: ["FREEZING_TEMPERATURE", "EMF_LEVEL_5", "GHOST_WRITING"]},
    {name: "Spirit", evidence: ["EMF_LEVEL_5", "SPIRIT_BOX", "GHOST_WRITING"]},
    {name: "Wraith", evidence: ["EMF_LEVEL_5", "SPIRIT_BOX", "D.O.T.S_PROJECTOR"]},
    {name: "Yokai", evidence: ["GHOST_ORB", "SPIRIT_BOX", "D.O.T.S_PROJECTOR"]},
    {name: "Yurei", evidence: ["FREEZING_TEMPERATURE", "GHOST_ORB", "D.O.T.S_PROJECTOR"]},
]

export default ghosts
