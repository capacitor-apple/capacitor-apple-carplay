import Foundation
import Capacitor

@objc(CapacitorCarplayPlugin)
public class CapacitorCarplayPlugin: CAPPlugin, CapacitorCarplayProtocol {
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

    @objc public func displayAlert(_ message: String) {
        self.carplay?.displayAlert(message)
    }
}
