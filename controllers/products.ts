import { Request, Response, Router } from "express";
import { Toode } from "../models/Toode";

const router: Router = Router();

let toode: Toode | null = new Toode(1, "Koola", 1.5, true);

router.get('/toode', (req: Request, res: Response) =>  {
  res.send(toode)
});

router.get("/kustuta-toode", (req: Request, res: Response) =>  {
  toode = null;
  res.send(toode)
});

router.get("/kustuta-toode2", (req: Request, res: Response) =>  {
  toode = null;
  res.send("Edukalt kustutatud");
});

router.get("/suurenda-hinda", (req: Request, res: Response) =>  {
  if (toode !== null) {
    toode.price = toode.price + 1;
  }
  res.send(toode);
});

router.get("/set-status", (req: Request, res: Response) => {
    if (toode !== null){
        if(toode.isActive !== false) {
            toode.isActive = false;
        } else {
            toode.isActive = true;
        }
    } else {
        res.send("Toodet pole olemas")
    }
    res.send(toode);
});

router.get("/change-name/:name", (req: Request, res: Response) => {
    const name = String(req.params.name);
    if (toode !== null) {
        toode.name = name;
    } else {
        res.send("Tooder pole olemas")
    }
    res.send(toode);
    
})

export default router;