import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/hello-world', (req: Request, res: Response) => {
    res.send('Hello word at ' + new Date());
});

router.get('/hello-variable/:nimi', (req: Request, res: Response) => {
    res.send(
        "Hello " + req.params.nimi
    )
});

router.get('/add/:nr1/:nr2', (req: Request, res: Response) => {
    res.send((Number(req.params.nr1) + Number(req.params.nr2)).toString());
});

router.get('/multiply/:nr1/:nr2', (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get('/do-logs/:arv', (req: Request, res: Response) => {
    for (let index= 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index)
    }
    res.send();
});

router.get('/random-generator/:max/:min', (req: Request, res: Response) => {
    const max = Number(req.params.max);
    const min = Number(req.params.min);
    res.send(Math.floor((Math.random() * (max - min) + min)).toString());
});

router.get('/sunniaasta/:sunniaasta', (req: Request, res: Response) => {
    const vanus = Number(req.params.sunniaasta);
    const vanuse_arvutus = new Date().getFullYear() - vanus;
    res.send(`oled  ${vanuse_arvutus} aastat vana, olenevalt kas sellel aastal on sünnipäev juba olnud`)
})

export default router;