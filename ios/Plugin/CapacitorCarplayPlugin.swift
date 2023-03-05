import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorCarplayPlugin)
public class CapacitorCarplayPlugin: CAPPlugin {
    private let implementation = CapacitorCarplay()

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
    let result = self.carplay.displayAlert(message)
    call.success([
        "result": result
    ])
}
}
