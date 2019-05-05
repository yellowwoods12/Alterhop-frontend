import { Position, Toaster, Intent } from '@blueprintjs/core'

export const AppToaster = Toaster.create({
	autoFocus: false,
	position: Position.TOP
})

export const showToast = (message, onDismiss, error) => {
	AppToaster.show({
		intent: error ? Intent.DANGER : Intent.PRIMARY,
		message,
		onDismiss,
		timeout: 2000
	})
}
