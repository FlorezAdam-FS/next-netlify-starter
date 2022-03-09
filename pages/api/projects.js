import { data } from "../../models/projects";

export default function handler(req, res) {
  res.status(200).json({ data });
}
