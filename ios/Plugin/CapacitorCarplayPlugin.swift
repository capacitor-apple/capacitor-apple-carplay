import Foundation
import Capacitor

@objc(CapacitorCarplayPlugin)
public class CapacitorCarplayPlugin: CAPPlugin {
    private let implementation = CapacitorCarplay()
    private var carplay: CapacitorCarplayProtocol?

    public override func load() {
        self.carplay = self.implementation
        self.implementation.setCarplay(self)
    }

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }

    @objc func displayAlert(_ call: CAPPluginCall) {
        guard let message = call.getString("message") else {
            call.reject("message must be provided")
            return
        }
        self.carplay?.displayAlert(message)
        call.success()
    }
}