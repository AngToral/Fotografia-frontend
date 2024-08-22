import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import './cardsGallery.scss'

function ModalPhoto({ visible, onCancel }) {
    return (
        <Dialog open={visible}>
            <DialogHeader>Nueva foto de galería</DialogHeader>
            <DialogBody>
                The key to more success is to have a lot of pillows. Put it this way,
                it took me twenty five years to get these plants, twenty five years of
                blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                getting started. I&apos;m up to something. Fan luv.
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={onCancel}
                    className="link text-foto-800 mr-3"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="text" className="link text-foto-200 mr-1 bg-foto-900" onClick={onCancel}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default ModalPhoto;